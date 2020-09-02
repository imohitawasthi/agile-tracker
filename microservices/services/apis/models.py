# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AtActiveStatusV1(models.Model):
    active_status_id = models.SmallAutoField(primary_key=True)
    active_status = models.TextField(blank=True, null=True)
    active_status_group = models.TextField(blank=True, null=True)
    active_status_description = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_active_status_v1'


class AtBucketV1(models.Model):
    bucket_id = models.BigAutoField(primary_key=True)
    bucket_name = models.TextField()
    bucket_description = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    modified_time = models.DateTimeField(blank=True, null=True)
    user_id = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_bucket_v1'

class AtTaskPriorityV1(models.Model):
    task_priority_id = models.SmallAutoField(primary_key=True)
    task_priority = models.TextField(blank=True, null=True)
    task_priority_description = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_task_priority_v1'


class AtTaskTypeV1(models.Model):
    task_type_id = models.SmallAutoField(primary_key=True)
    task_type = models.TextField(blank=True, null=True)
    task_type_description = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_task_type_v1'


class AtTaskV1(models.Model):
    task_id = models.BigAutoField(primary_key=True)
    task_priority = models.SmallIntegerField(blank=True, null=True)
    task_active_status = models.SmallIntegerField(blank=True, null=True)
    task_type = models.SmallIntegerField(blank=True, null=True)
    bucket_id = models.BigIntegerField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    modified_time = models.DateTimeField(blank=True, null=True)
    user_id = models.BigIntegerField(blank=True, null=True)    
    task_heading = models.TextField()
    task_description = models.TextField(blank=True, null=True)
    task_details = models.TextField(blank=True, null=True)
    task_start_date = models.DateTimeField(blank=True, null=True)
    task_end_date = models.DateTimeField(blank=True, null=True)


    class Meta:
        managed = False
        db_table = 'at_task_v1'

class AtTaskV1_1(models.Model):
    task_id = models.BigAutoField(primary_key=True)
    task_priority = models.SmallIntegerField(blank=True, null=True)
    task_active_status = models.SmallIntegerField(blank=True, null=True)
    task_type = models.SmallIntegerField(blank=True, null=True)
    bucket_id = models.BigIntegerField(blank=True, null=True)
    bucket_name = models.TextField(blank=True, null=True)
    task_detail_id = models.BigIntegerField()
    task_heading = models.TextField()
    task_description = models.TextField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)


class AtUserProfileV1(models.Model):
    user_profile_id = models.BigAutoField(primary_key=True)
    user_profile_firstname = models.TextField(blank=True, null=True)
    user_profile_lastname = models.TextField(blank=True, null=True)
    user_profile_picture = models.TextField(blank=True, null=True)
    user_profile_dob = models.DateField(blank=True, null=True)
    user_profile_gender = models.CharField(max_length=1, blank=True, null=True)
    user_profile_created = models.DateTimeField(blank=True, null=True)
    user_profile_modified = models.DateTimeField(blank=True, null=True)
    user_id = models.BigIntegerField(unique=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_user_profile_v1'


class AtUserV1(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    user_name = models.TextField()
    user_password = models.TextField(blank=True, null=True)
    user_active = models.SmallIntegerField(blank=True, null=True)
    create_time = models.DateTimeField(blank=True, null=True)
    modified_time = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'at_user_v1'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
