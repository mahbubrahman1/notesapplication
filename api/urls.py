from django.urls import path

from .import views


urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('notes/', views.get_notes, name='notes'),
    path('note/<str:pk>/', views.get_note, name='note'),
    path('note/<str:pk>/update/', views.edit_note, name='edit_note'),
    path('note/<str:pk>/delete/', views.delete_note, name='delete_note'),
]