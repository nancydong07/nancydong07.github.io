from django.shortcuts import render
from django.http import HttpResponse
from django import forms


# Create your views here.
class NewGoalForm(forms.Form):
    goal = forms.CharField(label="new goal")


def index(request):
    return render(request, "index.html",{
        "form": NewGoalForm()
    })

def goal(request):
    context = {}
    goal = request.POST.get('goal', None)
    context['goal'] = goal
    return render(request, "inside_goal.html",context)