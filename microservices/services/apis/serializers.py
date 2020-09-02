from rest_framework import serializers

from . import models

class AtBucketSerializerV1(serializers.ModelSerializer):
    class Meta:
        model=models.AtBucketV1
        fields = "__all__"

class AtTaskSerializerV1(serializers.ModelSerializer):
    class Meta:
        model=models.AtTaskV1
        fields = "__all__"

class AtTaskSerializerV1_1(serializers.ModelSerializer):
    class Meta:
        model=models.AtTaskV1_1
        fields = "__all__"