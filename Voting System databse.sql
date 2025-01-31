

use Votes;

create table Counting(
 voter_id varchar(50) not null,
 candidate_id int not null,
 vote_time timestamp default current_timestamp,
 foreign key(voter_id) references Voters(Voter_ID),
 foreign key(candidate_id) references Candidates(id),
 unique (voter_id)
 );
 
 