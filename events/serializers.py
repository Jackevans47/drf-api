from rest_framework import serializers
from events.models import Event


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = [
            "id",
            "track",
            "country",
            "event_date",
            "created_at",
            "race_type",
            "content",
            "ticket_link",
        ]
