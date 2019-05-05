from django.urls import path
from django.conf.urls import url, include
from certi import views 
from django.views.generic import TemplateView 
urlpatterns = [
    path("login/", views.OAuthRedirectView.as_view()),
    path("profile/", views.UserProfile.as_view()),
    path("logout/", views.LogoutView.as_view()),
    path("verify/:id", views.VerifyCerti)

]