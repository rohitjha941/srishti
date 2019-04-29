 
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from srishti import settings
from pages.views import *
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt
from certi import urls
from django.conf.urls.static import static

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/group/', ListGroup.as_view()),
    path('backend/domain/', DomainList.as_view()),
    path('backend/home-projects/', HomeProjectList.as_view()),
    path("backend/contact/",csrf_exempt(Contact.as_view()) ),
    path("certi/", include('certi.urls')),
    
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)