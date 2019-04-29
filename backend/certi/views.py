from django.shortcuts import render
from srishti.settings import OAuthClientID, OAuthSecret,BASE_DIR
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
import requests
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, render
from django.utils.crypto import get_random_string
from rest_framework import generics, mixins, status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .serializers import *
 



def generate_certi(obj):
    pass
     
     
 
     

class OAuthRedirectView(APIView):
    permission_classes = []
    @staticmethod
    def get(request):

        if request.method == 'GET':
            code = request.GET["code"]
            headers = requests.utils.default_headers()
            headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
            res1 = requests.post(
                url="http://people.iitr.ernet.in/oauth/gettoken/",
                headers=headers,
                data={
                    "client_id": OAuthClientID,
                    "client_secret": OAuthSecret,
                    "code": code
                })

            if res1.status_code != 200:
                return Response(status=status.HTTP_403_FORBIDDEN)

            res1 = res1.json()
            access_token = res1["access_token"]

            res2 = requests.post(
                url="http://people.iitr.ernet.in/oauth/getuserdata/",
                headers=headers,
                data={
                    "client_id": OAuthClientID,
                    "client_secret": OAuthSecret,
                    "access_token": access_token
                }
            )

            if res2.status_code != 200:
                return Response(status=status.HTTP_403_FORBIDDEN)
            res2 = res2.json()
            user = User.objects.filter(username=res2["username"])
            if user.exists():
                pass

            else:
                user_new = User.objects.create(
                    email=res2["email"],
                    username=res2["username"],
                    first_name=res2["name"]
                )
                unique_id = get_random_string(length=32)
                user_new.set_password(unique_id)
                user_new.save()

            user = User.objects.get(username=res2["username"])
            obj = Certificate.objects.filter(username=user.username)

            for data in obj:
                generate_certi(data)

            if user is not None:
                login(request, user)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            token, created = Token.objects.get_or_create(user=user)
            carrier_data = {
                'token': token.key,
            }
            return Response(carrier_data, status=status.HTTP_202_ACCEPTED)


class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    @staticmethod
    def get(request, format=None):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=status.HTTP_200_OK)
