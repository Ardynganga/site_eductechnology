from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('message-manager/', views.gestion_messages, name='gestion_messages'),
    path('projets/', views.projets, name='projets'),
    path('article/', views.blogs_article_detail, name='blogs_article_detail'),
    path('services/', views.services, name='services'),
    path('nouveau-compte/', views.sinscrire, name='sinscrire'),
    path('reinitialisation-motdepasse/', views.reinitialisation_motdepasse, name='reinitialisation_motdepasse'),
    path('connexion/', views.connexion, name='connexion'),
    path('console/', views.console, name='console'),
]