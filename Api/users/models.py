"""Users Models"""
from django.db import models

class LocalUser(models.Model):
    """User base model"""
    username = models.CharField(max_length=50, default='Nombre')
    client_ip = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return username"""
        return self.username