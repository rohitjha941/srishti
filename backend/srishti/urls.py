 
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from srishti import settings
from pages.views import *
from django.conf.urls.static import static


urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/group/', ListGroup.as_view()),
    path('backend/domain/', DomainList.as_view()),
    path("backend/contact/",Contact.as_view() )
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)