from rest_framework import serializers
from events.models import Event


class EventSerializer(serializers.ModelSerializer):
    country = serializers.SerializerMethodField()

    def get_country(self, obj):
        country_capitalised = next(
            country[1]
            for country in Event.countries
            if country[0] == obj.country
        )
        return country_capitalised

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
