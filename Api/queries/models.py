"""Queries models"""
from django.db import models

# Create your models here.
 
class Query(models.Model):
    value = models.TextField(blank=True)

    QUERY_CATEGORIES = (
        ('TEC', 'Technical'),
        ('LEG', 'Legal'),
        ('ADM', 'Administrative'),
        ('ECH', 'Echonomical'),
    )
    category = models.CharField(
        max_length=3,
        choices=QUERY_CATEGORIES,
        default='',
    )

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

class Answer(models.Model):
    query_pair = models.ForeignKey(
        'Query',
        on_delete=models.CASCADE
    )
    value = models.TextField(blank=True)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
