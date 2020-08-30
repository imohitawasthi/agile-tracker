from django.shortcuts import render
from rest_framework import viewsets

from . import serializers
from . import models

class AtBucketAPIV1(viewsets.ModelViewSet):
    serializer_class = serializers.AtBucketSerializerV1
    queryset = models.AtBucketV1.objects.all()[:5]