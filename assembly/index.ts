import { logging, PersistentMap } from 'near-sdk-as'

const Votes = new PersistentMap<string, i32>('Vote storage')
const VotersStorage = new PersistentMap<string, string[]>('Voters storage')

// View methods
export function getVotes(candidate: string): i32 {
  if (Votes.contains(candidate)) {
    return Votes.getSome(candidate)
  }
  logging.log('No votes not found for this candidate')
  return 0
}

export function userDidParticipate(user: string): bool {
  if (VotersStorage.contains('voters')) {
    const votersArr = VotersStorage.getSome('voters')
    return votersArr.includes(user)
  } else {
    return false
  }
}

// Change Mehods
export function incrementVotes(candidate: string): void {
  if (Votes.contains(candidate)) {
    let candidateVotes = Votes.getSome(candidate)
    candidateVotes = candidateVotes + 1
    Votes.set(candidate, candidateVotes)
  } else {
    Votes.set(candidate, 1)
  }
}

export function recordUser(user: string): void {
  if (VotersStorage.contains('voters')) {
    const votersArr = VotersStorage.getSome('voters')
    if (!votersArr.includes(user)) {
      votersArr.push(user)
      logging.log('User ' + user + 'added to VotersStorage')
    } else {
      logging.log('User ' + user + 'already Voted')
    }
  } else {
    logging.log('User ' + user + 'added to VotersStorage')
    VotersStorage.set('voters', [user])
  }
}
