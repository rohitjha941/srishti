from .serializers import *
from .models import *
from rest_framework import generics, mixins, status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


class ListGroup(generics.ListAPIView):
    queryset = Groups.objects.all().order_by("name")
    serializer_class = GroupsSerializer

class DomainList(generics.ListAPIView):
    queryset = Domains.objects.all().order_by("name")
    serializer_class = DomainSerializers


class Contact(APIView):
    permission_classes = []
    def post(self,  request):
        serializer = ContactSerializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (status=status.HTTP_200_OK)
        return Response (status = status.HTTP_400_BAD_REQUEST)


class HomeProjectList(generics.ListAPIView):
    queryset = HomeProject.objects.all().order_by("name")
    serializer_class = HomeProjectSerializers