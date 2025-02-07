from django.db import models


class Event(models.Model):
    """
    Event model
    """

    countries = [
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
    country = models.CharField(max_length=32, choices=countries)
    event_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    race_type = models.CharField(choices=race_types, max_length=30)
    content = models.TextField(blank=True)
    ticket_link = models.URLField(blank=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.id} {self.track} {self.event_date}"
