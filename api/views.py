from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Note
from .serializers import NoteSerializer


# all routes 
@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    
    return Response(routes)


# get all notes 
@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data)


# get note
@api_view(['GET'])
def get_note(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data)


# update or edit note 
@api_view(['PUT'])
def edit_note(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    # check note is valid than save
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


# delete note 
@api_view(['DELETE'])
def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()

    return Response('note deleted')


# create note
@api_view(['POST'])
def create_note(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data)