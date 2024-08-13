# exchange/models.py

from django.db import models
from django.conf import settings

class Item(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    condition = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title