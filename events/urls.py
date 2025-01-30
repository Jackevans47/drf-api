from django.urls import path
from posts import views

urlpatterns = [
    path("events/", views.EventList.as_view()),
]
