from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

# A simple view for root URL
def root_view(request):
    return JsonResponse({"message": "🎉 Backend is live!", "status": "OK"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
    path('', root_view),  # 👈 Add this line
]

from django.conf import settings
from django.conf.urls.static import static
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
