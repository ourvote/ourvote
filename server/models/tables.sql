CREATE TYPE party AS ENUM (
  'Democrat', 'Republican', 'Independent', 'Green', 'Libertarian', 'Other'
);

CREATE TABLE public.users (
  _id serial NOT NULL,
  name text NOT NULL,
  address text NOT NULL,
  party text,
  password varchar(30) NOT NULL,
  PRIMARY KEY (_id)
);

CREATE TABLE public.prev_registrations (
  _id serial NOT NULL,
  address text NOT NULL,
  party text,
  user_id serial NOT NULL,
  PRIMARY KEY (_id), 
  FOREIGN KEY (user_id) REFERENCES users (_id)
);

CREATE TYPE govt_level AS ENUM (
  'federal', 'state', 'local'
);

CREATE TABLE public.elections (
  _id serial NOT NULL,
  office text NOT NULL,
  district text NOT NULL,
  date date NOT NULL,
  level govt_level NOT NULL,
  PRIMARY KEY (_id)
);

CREATE TABLE public.roles (
  _id serial NOT NULL,
  title text,
  description text,
  PRIMARY KEY (_id)
);

CREATE TABLE public.donors (
  _id serial NOT NULL,
  name text NOT NULL,
  ideology text,
  PRIMARY KEY (_id)
);



CREATE TABLE public.politicians (
  _id serial NOT NULL,
  name text NOT NULL UNIQUE,
  office text NOT NULL,
  date_elected date,
  division text NOT NULL,
  party text,
  website text,
  phone text,
  email text,
  election_id integer,
  photo text,
  fec varchar(9),
  crp varchar(9),
  PRIMARY KEY (_id),
  FOREIGN KEY (election_id) REFERENCES elections (_id)
);

CREATE TABLE public.pols_roles (
  _id serial NOT NULL,
  pol_id serial NOT NULL,
  role_id serial NOT NULL,
  PRIMARY KEY (_id), 
  FOREIGN KEY (pol_id) REFERENCES politicians (_id),
  FOREIGN KEY (role_id) REFERENCES roles (_id)
);

CREATE TABLE public.donations (
  _id serial NOT NULL,
  pol_id serial NOT NULL,
  donor_id serial NOT NULL,
  amount integer,
  PRIMARY KEY (_id), 
  FOREIGN KEY (pol_id) REFERENCES politicians (_id),
  FOREIGN KEY (donor_id) REFERENCES donors (_id)
);

CREATE TABLE public.candidates (
  _id serial NOT NULL,
  name text NOT NULL,
  party text,
  website text,
  phone integer,
  email text,
  election_id serial,
  PRIMARY KEY (_id),
  FOREIGN KEY (election_id) REFERENCES elections (_id)
);

-- how to avoid inserting duplicate politician records
-- this approach requires that the name field have a UNIQUE constraint
INSERT INTO politicians
VALUES
  -- list of values
ON CONFLICT ON CONSTRAINT politicians_name_key
DO NOTHING;
-- this approach is the same as above, just more simply written. Still requires UNIQUE constraint
INSERT INTO politicians
VALUES
  -- list of values
ON CONFLICT (name)
DO NOTHING;