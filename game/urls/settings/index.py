from django.urls import path, include
from game.views.settings.getinfo import getinfo # 引入函数
from game.views.settings.login import signin
from game.views.settings.logout import signout
from game.views.settings.register import register


urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"), # 路径
    path("login/", signin, name="settings_login"), # 登录
    path("logout/", signout, name="settings_logout"), # 登出
    path("register/", register, name="settings_register"), # 注册
    path("acwing/", include("game.urls.settings.acwing.index")), # web一键登录
]

