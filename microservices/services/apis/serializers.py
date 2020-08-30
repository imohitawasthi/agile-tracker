from rest_framework import serializers

from . import models

class AtBucketSerializerV1(serializers.ModelSerializer):
    class Meta:
        model=models.AtBucketV1
        fields = "__all__"