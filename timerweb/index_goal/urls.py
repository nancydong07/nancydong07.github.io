from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("inside_goal", views.goal, name="goalpage")
   ]