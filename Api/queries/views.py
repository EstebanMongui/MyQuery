"""queries viewsets module"""

# Django
from django.http import Http404
# Django rest framework
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
#Local modules
from .serializers import QuerySerializer, AnswerSerializer
from .models import Query, Answer

class QueryList(APIView):
    """List all queries, or create a new querie"""
    def get(self, request, format=None):
        queries = Query.objects.all()
        serializer = QuerySerializer(queries, many=True)
        data = serializer.data
        return Response(data)

    def post(self, request, format=None):
        serializer = QuerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

class QueryFilter(APIView):
    """Filter query by category"""
    def get(self, request, category, format=None):
        query = Query.objects.filter(category=category)
        serializer = QuerySerializer(query, many=True)
        import pdb; pdb.set_trace()
        return Response(serializer.data)


class AnswerList(APIView):
    """List all views, or create a niew view"""
    def get(self, request, format=None):
        answers = Answer.objects.all()
        serializer = AnswerSerializer(answers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """Create new answer and change query is answered state"""
        serializer = AnswerSerializer(data=request.data)
        query = Query.objects.get(pk=request.data['query_pair'])
        if serializer.is_valid():
            query.is_answered = True
            query.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class AnswerFilter(APIView):
    """Filter answer by query pair id"""
    def get(self, request, query_id, format=None):
        answer = Answer.objects.filter(query_pair=query_id)
        serializer = AnswerSerializer(answer, many=True)
        return Response(serializer.data)