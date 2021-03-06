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
      },
      {
                id: 3,
                winnerTeamName: 'Sinestro Corps',
                loserName: 'Chris Smith',
                loserTeamName: 'Hops & Barley',
                winnerScore: 90.34,
                loserScore: 77.06,
                loserImage: 'ChrisSmith.jpg',
                introText: 'The beer must have gotten to him when he put this sorry excuse for a team together. Lowest score of the week between both leagues.',
                introTitle: 'A finalist from last year, back where he belongs',
                highlights: [
                    'Left Darren Sproles on the bench, where he scored 20.30 points and surpassed his scoring projection by 63.3%, the highest percentage of any player on the team.',
                    'Did not start Kirk Cousins, who led the team in scoring with 23.34 points.',
                    'At the QB position, Hops&Barley got outscored 31.94 - 13.86 by Sinestro Corps.',
                    'Whoever gave you this advice, you might want to lose their number. Picked up and started Theo Riddick, who then scored below his 10.34-point projection with 4.80 points.'
        ]
      },
      {
                id: 4,
                winnerTeamName: 'KoZ',
                loserName: 'Angela Jenkins',
                loserTeamName: 'The Electric Mayhem',
                winnerScore: 104.20,
                loserScore: 74.92,
                loserImage: 'AngelaJenkins.jpg',
                introText: 'A week of returning bye weeks shows us The Electric Mayhem again.',
                introTitle: 'This band should retire',
                highlights: [
                    'Left Blake Bortles on the bench, where he led the matchup in scoring with 29.88 points.',
                    'Lost the matchup despite getting KoZ on their lowest-scoring week of the season.',
                    'Lost the matchup despite getting KoZ on their lowest-scoring week of the season.',
                    'KoZ had a better day at the QB position, topping The Electric Mayhem 17.60 - 8.22.'
        ]
      },
      {
                id: 5,
                winnerTeamName: 'The torn ACL',
                loserName: 'Eric Thompson',
                loserTeamName: 'Sinestro Corps',
                winnerScore: 109.38,
                loserScore: 82.28,
                loserImage: 'EricThompson.jpg',
                introText: 'Apparently the Green Lantern Corps sabotaged this team. They dropped 55 points in one week!',
                introTitle: 'A point drop of cosmic proportions',
                highlights: [
                    'When assigning blame following this loss, Sinestro Corps can look in the mirror. They started a player with zero points (Michael Floyd).',
                    'Gotta hit rock button before you can start to rise. It was a season-low 16.98 points for Matt Ryan this week. It was also a season-low for his performance versus projections, reaching only 81.3% of a projected point total of 20.88.',
                    'Sinestro Corps would have welcomed more points at WR, where The torn ACL topped them 35.50 - 15.20.',
                    '7 of the starters on Sinestro Corps underperformed versus their projections.'
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
      },
      {
                id: 3,
                winnerTeamName: 'Bears Beets BSG',
                loserName: 'Kevin Hill',
                loserTeamName: 'BigBadBallers',
                winnerScore: 176.58,
                loserScore: 78.42,
                loserImage: 'KevinHill.jpg',
                introText: 'The lowest score of the season goes to one of last years finalists. Losing by almost 100 points, he huffed, and puffed, but just ended up needing his inhaler.',
                introTitle: '3 Elite Receivers, 11 elite points.',
                highlights: [
                    'Did not start Michael Floyd, who underachieved but still scored more than any WR on the team with 6.50 points against a projected 8.05.',
                    'BigBadBallers would have welcomed more points at WR, where Bears Beets BSG topped them 66.40 - 11.80.',
                    'The RBs on BigBadBallers let them down, getting outgunned by the RBs on Bears Beets BSG 41.80 - 17.90.',
                    'BigBadBallers scored the fewest points in the league this week and had the lowest score in the league this season.'
                ]
      },
      {
                id: 4,
                winnerTeamName: 'Clif\'s Team',
                loserName: 'Kevin Hill',
                loserTeamName: 'BigBadBallers',
                winnerScore: 133.52,
                loserScore: 76.42,
                loserImage: 'KevinHill.jpg',
                introText: 'This team should just be renamed to BadBallers. Nothing redeeming about this team, expect to see more of them on bye week.',
                introTitle: 'Another week on the bottom',
                highlights: [
                    'Left Brock Osweiler on the bench, where he led the team in scoring with 19.56 points.',
                    'BigBadBallers picked up Matthew Stafford, who then fell short of his 22.97-point projection by scoring 8.22 points.',
                    'With 0.40 points, DeAndre Hopkins was last in the matchup in scoring and got only 3.4% of his projected point total, which is his lowest percentage of the season.',
                    'The WR corps couldn\'t keep pace with their counterparts from clif\'s Team and were outscored 41.30 - 15.10.'
                ]
      },
      {
                id: 5,
                winnerTeamName: 'Jennifer\'s Team',
                loserName: 'Patrick Scott',
                loserTeamName: 'Dak\'s Not Romo',
                winnerScore: 133.52,
                loserScore: 76.42,
                loserImage: 'PatrickScott.jpg',
                introText: 'It seems that this team name might be reversed. This old and tired team needs a refresh, and someone new at the helm might be the perfect solution.',
                introTitle: 'We have a mini-playoff for worst in the division',
                highlights: [
                    'Dak\'s Not Romo had two starters score zero points (Torrey Smith and Coby Fleener).',
                    'The Carolina Panthers Defense had two season-lows this week. They scored a season-low 5.70 points and recorded only 35.7% of their 15.97-point projection.',
                    'With 3.60 points versus a projected 9.84, John Brown scored only 36.6% of his projected point total.',
                    'Of the 9 starters on Dak\'s Not Romo, 6 underperformed versus their projections.'
                ]
      }
    ]
  },
];
