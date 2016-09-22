import { League } from '../models/league';
import { Week } from '../models/week';

export const LEAGUES: League[] = [
  {
    id: 1,
    name: 'Zima Division',
    weeks: [
      {
                id: 1,
                winnerTeamName: 'Wickedly Good',
                loserName: 'Angela Jenkins',
                loserTeamName: 'The Electric Mayhem',
                winnerScore: 129.04,
                loserScore: 80.7,
                loserImage: 'AngelaJenkins.jpg',
                introText: 'Let us all appreciate this weeks first bye week casualty. Bring out the defibrilator, the mayhem need a shock.',
                introTitle: 'First of the worst!',
                highlights: [
                    'The 48.34-point margin of victory by Wickedly Good was the largest in the league this week.',
                    'The Electric Mayhem would\'ve needed an additional 65.61 points to beat all teams in the league this week.',
                    'In the loss, Matt Forte had the 10th-highest RB score in the league this week with 15.50 points.',
                    'The Electric Mayhem failed to reach their projected total, while Wickedly Good exceeded their scoring projection.'
                ]
      },
      {
                id: 2,
                winnerTeamName: 'KoZ',
                loserName: 'Joey King',
                loserTeamName: 'The torn ACL',
                winnerScore: 125.92,
                loserScore: 67.78,
                loserImage: 'JoeyKing.jpg',
                introText: 'It is not every week a team lives up to it\'s name, but here we are. With a score like this it seem a torn ACL is the least of their problems.',
                introTitle: 'This rookie is on injury reserve.',
                highlights: [
                    'Did not start Mike Wallace, who scored 16.10 points, surpassing his projected points by 197.0%, the third-highest percentage in the league.',
                    'It was a beating at QB for The torn ACL, as they were outscored 37.82 - 12.08 by KoZ.',
                    'The torn ACL had 7 starters fail to reach their projections.',
                    'The WRs on The torn ACL let them down, resulting in a 36.00 - 18.00 difference at the position.'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Bourbon Division',
    weeks: [
      {
                id: 1,
                winnerTeamName: 'Trump\'s Walls',
                loserName: 'Dustin Kopp',
                loserTeamName: 'Bears Beets BSG',
                winnerScore: 95.06,
                loserScore: 86.96,
                loserImage: 'DustinKopp.jpg',
                introText: 'Seems that nothing can wipe that smirk off of this guy\'s face. Even when scoring only a bit over 60% of the high scorer\'s tally. It is truly disappointing.',
                introTitle: 'Look at that smug mug',
                highlights: [
                    'Funny, the Hall provides articles you could have studied. But instead you watched Bears Beets BSG cry trying.',
                    '7 of the 9 starters scored less than their projected points.',
                    'Adrian Peterson could not reach his projected point total, scoring only 24.1% of his 12.87-point projection with 3.10 points.',
                    'All three of the starting WRs scored below their projected points.'
                ]
            },
      {
                id: 2.1,
                winnerTeamName: 'Romosexuals',
                loserName: 'Scott Snook',
                loserTeamName: 'The Big Gronkowski',
                winnerScore: 105.28,
                loserScore: 84.72,
                loserImage: 'ScottSnook.jpg',
                introText: 'The Big Gronkowski, just like their namesake, did not play this week.',
                introTitle: 'We have a bye week tie!',
                highlights: [
                    'Well, that\'s embarrassing. Left Tyrod Taylor on the bench, where he ranked fifth in the league in scoring with 30.38 points.',
                    'Should have started Eric Ebron, who underachieved, but still had more points than the starting TE with 5.30 against a projected 6.37.',
                    'Arian Foster was last in the matchup in scoring with 0.90 points.',
                    'The Big Gronkowski was dominated at the TE position, scoring 3.40 points versus the 18.20 for Romosexuals.'
                ]
            },
      {
                id: 2.2,
                winnerTeamName: 'BigBadBallers',
                loserName: 'Patrick Scott',
                loserTeamName: 'Dak\'s Not Romo',
                winnerScore: 114.26,
                loserScore: 84.72,
                loserImage: 'PatrickScott.jpg',
                introText: 'It is a bad day when you leave almost as many points on the bench as your starters scored. 3 Moves and you would have won, 1 move and you are off bye week.',
                introTitle: 'The other half of Tie Week.',
                highlights: [
                    'This is one of those mistakes that you continuously think about for ten years. Did not start Derek Carr, who scored 30.96 points to rank fourth in the league in scoring.',
                    'Had a chance to start Torrey Smith, who outdid his scoring projection of 6.15 points by scoring 11.50 points.',
                    'Dak\'s Not Romo had 7 of their 9 starters score less than their projected points.',
                    'The WRs on Dak\'s Not Romo let them down, resulting in a 47.20 - 16.80 difference at the position.'
                ]
      }
    ]
  },
];
