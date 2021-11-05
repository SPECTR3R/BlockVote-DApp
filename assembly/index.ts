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

export function affilliateDidParticipate(affilliate: string): bool {
  if (VotersStorage.contains('votes')) {
    const votersArr = VotersStorage.getSome('votes')
    return votersArr.includes(affilliate)
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

export function recordUser(affilliate: string): void {
  if (VotersStorage.contains('votes')) {
    const votersArr = VotersStorage.getSome('votes')
    if (votersArr.includes(affilliate)) {
      votersArr.push(affilliate)
      logging.log('User ' + affilliate + 'added to VotersStorage')
    } else {
      logging.log('User ' + affilliate + 'already Voted')
    }
  } else {
    logging.log('User ' + affilliate + 'added to VotersStorage')
    VotersStorage.set('votes', [affilliate])
  }
}
