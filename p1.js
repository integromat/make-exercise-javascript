const ACTIVITIES = [
  // W01:
  { person: 'Alice', distance: 12.5, type: 'run', week: 'W01' },
  { person: 'Alice', distance: 2.0, type: 'swim', week: 'W01' },
  { person: 'Alice', distance: 5.5, type: 'run', week: 'W01' },
  { person: 'Bob', distance: 8.0, type: 'run', week: 'W01' },
  { person: 'Bob', distance: 3.0, type: 'swim', week: 'W01' },
  { person: 'Bob', distance: 10.0, type: 'run', week: 'W01' },
  { person: 'Carol', distance: 15.0, type: 'run', week: 'W01' },
  { person: 'Carol', distance: 2.5, type: 'swim', week: 'W01' },
  { person: 'Carol', distance: 7.0, type: 'run', week: 'W01' },
  // W02:
  { person: 'Alice', distance: 18.0, type: 'run', week: 'W02' },
  { person: 'Alice', distance: 3.5, type: 'swim', week: 'W02' },
  { person: 'Alice', distance: 14.0, type: 'run', week: 'W02' },
  { person: 'Bob', distance: 22.0, type: 'run', week: 'W02' },
  { person: 'Bob', distance: 1.5, type: 'swim', week: 'W02' },
  { person: 'Bob', distance: 12.0, type: 'run', week: 'W02' },
  { person: 'Carol', distance: 10.0, type: 'run', week: 'W02' },
  { person: 'Carol', distance: 4.0, type: 'swim', week: 'W02' },
  { person: 'Carol', distance: 16.5, type: 'run', week: 'W02' },
];

function getTotalRunDistanceForPerson(personName) {
  return 123;
}

function getTopRunnerForGivenWeek(week) {
  return {
    person: 'Name',
    distance: 123
  };
}

function get2TopPerformersByType() {
  return {
    run: [{
      person: 'Name',
      distance: 123
    },{
      person: 'Name',
      distance: 123
    }],
    swim: [{
      person: 'Name',
      distance: 123
    },{
      person: 'Name',
      distance: 123
    }]
  }
}

console.log('=== Function 1: getTotalRunDistanceForPerson ===');
const aliceDistance = getTotalRunDistanceForPerson('Alice');
console.log('Alice:', aliceDistance, aliceDistance === 50 ? '✅' : '❌ (expected: 50)');

console.log('\n=== Function 2: getTopRunnerForGivenWeek ===');
const w01 = getTopRunnerForGivenWeek('W01');
console.log('W01:', w01.person, w01.distance, w01.person === 'Carol' && w01.distance === 22.0 ? '✅' : '❌ (expected: Carol, 22.0)');
const w02 = getTopRunnerForGivenWeek('W02');
console.log('W02:', w02.person, w02.distance, w02.person === 'Bob' && w02.distance === 34.0 ? '✅' : '❌ (expected: Bob, 34.0)');

console.log('\n=== Function 3: get2TopPerformersByType ===');
const result = get2TopPerformersByType();
const runPass = result.run?.[0]?.person === 'Bob' && result.run?.[0]?.distance === 52 && result.run?.[1]?.person === 'Alice' && result.run?.[1]?.distance === 50;
console.log('Top runners:', result.run?.[0]?.person, result.run?.[0]?.distance + ',', result.run?.[1]?.person, result.run?.[1]?.distance, runPass ? '✅' : '❌ (expected: Bob 52, Alice 50)');
const swimPass = result.swim?.[0]?.person === 'Carol' && result.swim?.[0]?.distance === 6.5 && result.swim?.[1]?.person === 'Alice' && result.swim?.[1]?.distance === 5.5;
console.log('Top swimmers:', result.swim?.[0]?.person, result.swim?.[0]?.distance + ',', result.swim?.[1]?.person, result.swim?.[1]?.distance, swimPass ? '✅' : '❌ (expected: Carol 6.5, Alice 5.5)');
