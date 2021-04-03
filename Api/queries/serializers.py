"""Queries serializers"""

#Rest-framework
from rest_framework import serializers
from queries.models import Query, Answer

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        exclude = ['modified']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        exclude = ['modified']