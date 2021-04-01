"""Admin queries module"""

from django.contrib import admin
# Local Models
from .models import Query

admin.site.register(Query)
