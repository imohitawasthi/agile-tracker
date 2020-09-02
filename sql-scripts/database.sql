select 1;
# Meta

create table at_active_status_v1 (
  active_status_id          smallint primary key,
  active_status             text,
  active_status_group       text,
  active_status_description text,
  create_time               timestamp default now()
);

create table at_task_priority_v1 (
  task_priority_id          smallint primary key,
  task_priority             text,
  task_priority_description text,
  create_time               timestamp default now()
);

create table at_task_type_v1 (
  task_type_id          smallint primary key,
  task_type             text,
  task_type_description text,
  create_time           timestamp default now()
);

# User

create table at_user_v1 (
  user_id       bigint    auto_increment primary key,
  user_name     text not null,
  user_password text,
  user_active   smallint references at_active_status_v1 (active_status_id),
  create_time   timestamp default now(),
  modified_time timestamp default now()
);

create table at_user_profile_v1 (
  user_profile_id        bigint    auto_increment primary key,
  user_profile_firstname text,
  user_profile_lastname  text,
  user_profile_picture   text,
  user_profile_dob       date,
  user_profile_gender    varchar(1),
  user_profile_created   timestamp default now(),
  user_profile_modified  timestamp default now(),
  user_id                bigint unique references at_user_v1 (user_id)
);

# Buckets

create table at_bucket_v1 (
  bucket_id          bigint    auto_increment primary key,
  bucket_name        text not null,
  bucket_description text,
  create_time        timestamp default now(),
  modified_time      timestamp default now(),
  user_id            bigint references at_user_v1 (user_id)
);

# Tasks

create table at_task_v1 (
  task_id            bigint    auto_increment primary key,
  task_priority      smallint references at_task_priority_v1 (task_priority_id),
  task_active_status smallint references at_active_status_v1 (active_status_id),
  task_type          smallint references at_task_type_v1 (task_type_id),
  bucket_id          bigint references at_bucket_v1 (bucket_id),
  create_time        timestamp default now(),
  modified_time      timestamp default now(),
  task_heading    text not null,
  task_description text,
  task_details    text,
  task_start_date timestamp default now(),
  task_end_date   timestamp default now(),
  user_id            bigint references at_user_v1 (user_id)
);

# Data

insert into at_active_status_v1 (active_status_id, active_status, active_status_group, active_status_description)
  value
  (1, '', 'ACTIVE_STATUS', 'Is Active'),
  (2, '', 'ACTIVE_STATUS', 'Is In Active'),
  (3, '', 'ACTIVE_STATUS', 'Is Deleted'),
  (101, '', 'TASK_STATUS', 'To Do'),
  (102, '', 'TASK_STATUS', 'In Progress'),
  (103, '', 'TASK_STATUS', 'Is Complete'),
  (104, '', 'TASK_STATUS', 'Is Closed'),
  (105, '', 'TASK_STATUS', 'Is Deleted');

insert into at_task_priority_v1 (task_priority_id, task_priority, task_priority_description)
  value
  (1, 'CRITICAL', 'Is Critical'),
  (101, 'HIGHEST', 'Is Highest'),
  (201, 'HIGH', 'Is High'),
  (301, 'NORMAL', 'Is Normal'),
  (401, 'LOW', 'Is Low'),
  (501, 'LOWEST', 'Is Lowest');

insert into at_task_type_v1 (task_type_id, task_type, task_type_description)
values
  (1, 'EPIC', 'Is Epic'),
  (101, 'STORY', 'Is Story'),
  (201, 'TASK', 'Is Task'),
  (301, 'FEEDBACK', 'Is Feedback'),
  (401, 'BUG', 'Is Bug');

insert into at_user_v1 (user_name, user_password, user_active, create_time, modified_time)
  value ('guest', '', 1, now(), now());

insert into at_user_profile_v1 (user_profile_firstname, user_profile_lastname, user_profile_picture, user_profile_dob, user_profile_gender, user_id)
  value ('Guest', 'User', '', '2001-01-01', 'M', 1);
