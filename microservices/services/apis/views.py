from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView

from . import serializers
from . import models


class AtBucketAPIV1(viewsets.ModelViewSet):
    serializer_class = serializers.AtBucketSerializerV1
    queryset = models.AtBucketV1.objects.all()[:100]


class AtTaskAPIV1_1(viewsets.ModelViewSet):
    serializer_class = serializers.AtTaskSerializerV1_1
    queryset = models.AtTaskV1_1.objects.raw("""
        select
            t.task_id,
            task_priority,
            task_active_status,
            task_type,
            t.bucket_id,
            b.bucket_name,
            task_heading,
            task_description,
            task_details,
            t.create_time
            from at_task_v1 t
        inner join at_bucket_v1 b on b.bucket_id = t.bucket_id;
    """)


class AtTaskAPIV1(viewsets.ModelViewSet):
    serializer_class = serializers.AtTaskSerializerV1
    queryset = models.AtTaskV1.objects.all()[:100]


class AtTaskSingleAPIV1(viewsets.ModelViewSet):


    def get_object(self, pk):
        try:
            return models.AtTaskV1.objects.get(pk=pk)
        except models.AtTaskV1.DoesNotExist:
            raise 'Not Found'

    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = serializers.AtTaskSerializerV1(event, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk, format=None):
        event = self.get_object(pk)
        event.delete()

