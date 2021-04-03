"""Users application views"""

# Django
from django.http import Http404
# Django rest framework
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
#Local modules
from .models import LocalUser
from .serializers import LocalUserSerializer

class LocalUserList(APIView):
    """List all users or create a new user"""
    def get(self, request, format=None):
        users = LocalUser.objects.all()
        serializer = LocalUserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            client_ip = x_forwarded_for.split(',')[0]
        else:
            client_ip = request.META.get('REMOTE_ADDR')
        data = request.data
        data['client_ip']=client_ip
        serializer = LocalUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)