"""Users serializers"""

# Rest framewrok
from rest_framework import serializers
# Models
from users.models import LocalUser

class LocalUserSerializer(serializers.ModelSerializer):
    """Local user model serializer"""
    class Meta:
        model = LocalUser
        exclude = ['created', 'modified']
    

    