# instiexchange/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('exchange.urls')),
    path('api/users/', include('users.urls')),
]