from django.db import models

# TODO create Racer model
# TODO create at least 20 racers
# TODO create 3 events
# TODO create country model
# TODO create track model (track model relates to country)


class Event(models.Model):
    """
    Event model
    """

    # Track name
    # Location
    # Date of event
    # Race type
    # Ticket link

    # Racers (one to many)
    # Followers/Subscribers
    # future thing: posts

    country = [
        ("australia", "Australia"),
        ("italy", "Italy"),
        ("united_kingdom", "United Kingdom"),
        ("america", "America"),
        ("france", "France"),
        ("spain", "Spain"),
        ("monaco", "Monaco"),
        ("canada", "Canada"),
        ("netherlands", "Netherlands"),
        ("mexico", "Mexico"),
    ]
    race_types = [
        ("race", "Race"),
        ("sprint", "Sprint"),
    ]

    track = models.CharField(max_length=100)
    country = models.CharField(max_length=32, choices=country)
    event_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    race_type = models.CharField(choices=race_types, max_length=30)
    content = models.TextField(blank=True)
    ticket_link = models.URLField(blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.id} {self.track} {self.event_date}"
