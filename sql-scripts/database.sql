
select 1;

# Meta

create table at_active_status_v1 (
  active_status_id smallint primary key auto_increment,
  active_status text,
  active_status_group text,
  active_status_description text,
  create_time timestamp default now()
);

create table at_task_priority_v1 (
  task_priority_id smallint primary key auto_increment,
  task_priority text,
  task_priority_description text,
  create_time timestamp default now()
);

create table at_task_type_v1 (
  task_type_id smallint primary key auto_increment,
  task_type text,
  task_type_description text,
  create_time timestamp default now()
);

# User

create table at_user_v1 (
  user_id bigint auto_increment primary key,
  user_name text not null,
  user_password text,
  user_active smallint references at_active_status_v1(active_status_id),
  create_time timestamp default now(),
  modified_time timestamp default now()
);

create table at_user_profile_v1 (
  user_profile_id bigint auto_increment primary key,
  user_profile_firstname text,
  user_profile_lastname text,
  user_profile_picture text,
  user_profile_dob date,
  user_profile_gender varchar(1),
  user_profile_created timestamp default now(),
  user_profile_modified timestamp default now(),
  user_id bigint references at_user_v1(user_id) unique
);

# Buckets

create table at_bucket_v1 (
  bucket_id bigint auto_increment primary key,
  bucket_name text not null,
  bucket_description text,
  create_time timestamp default now(),
  modified_time timestamp default now(),
  user_id bigint references at_user_v1(user_id)
);

# Tasks

create table at_task_v1 (
  task_id bigint auto_increment primary key,
  task_priority smallint references at_task_priority_v1(task_priority_id),
  task_active_status smallint references at_active_status_v1(active_status_id),
  task_type smallint references at_task_type_v1(task_type_id),
  bucket_id bigint references at_bucket_v1(bucket_id),
  create_time timestamp default now(),
  modified_time timestamp default now(),
  user_id bigint references at_user_v1(user_id)
);

create table at_task_detail_v1 (
  task_detail_id bigint auto_increment primary key,
  task_heading text not null,
  task_decription text,
  task_details text,
  task_start_date date default current_date,
  task_end_date date default current_date,
  create_time timestamp default now(),
  modified_time timestamp default now(),
  task_id bigint references at_task_v1(task_id)
);



