"""My Query Urls module"""
# Django
from django.urls import include, path
from django.contrib import admin
# Django Rest
from rest_framework.urlpatterns import format_suffix_patterns
# Views
from queries import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('queries/', views.QueryList.as_view()),
    path('queries/<str:category>/', views.QueryFilter.as_view()),
    path('answers/', views.AnswerList.as_view()),
    path('answers/<int:query_id>/', views.AnswerFilter.as_view()),
    # path('access/<int:age>', views.access),
]

urlpatterns = format_suffix_patterns(urlpatterns)