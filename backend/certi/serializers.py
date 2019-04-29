from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User


class CertiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields =  "__all__"


class UserSerializer(serializers.ModelSerializer):
    certis = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields =  ("username", "email" , "first_name" , "certis")
    def get_certis(self, obj):
        certi = Certificate.objects.filter(username = obj.username)
        serializer = CertiSerializer(certi, many = True)
        return serializer.data
    