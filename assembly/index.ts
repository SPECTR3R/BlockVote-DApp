import { logging, PersistentMap } from 'near-sdk-as'

const CadidateURL = new PersistentMap<string, string>('candidateURL')
const CandidatePair = new PersistentMap<string, string[]>('Candidate Pair')
const PromtArray = new PersistentMap<string, string[]>('Promt Array')
const VoteArray = new PersistentMap<string, i32[]>('Vote Array')
const userParticipation = new PersistentMap<string, string[]>('User Participation record')

// View metho
export function getURL(name: string): string {
  if (CadidateURL.contains(name)) {
    return CadidateURL.getSome(name)
  } else {
    logging.log('Cannot find that user' + name)
    return ''
  }
}
export function didParticipate(promt: string, user: string): bool {
  if (userParticipation.contains(promt)) {
    const userArray = userParticipation.getSome(promt)
    return userArray.includes(user)
  }
  logging.log('promt not found')
  return false
}

export function getAllPromt(): string[] {
  if (userParticipation.contains('All arrays')) {
    return PromtArray.getSome('All arrays')
  }
  logging.log('no promts not found')
  return []
}

export function getVotes(promt: string): i32[] {
  if (VoteArray.contains(promt)) {
    return VoteArray.getSome(promt)
  }
  logging.log('no votes not found for this promt')
  return [0, 0]
}

// Change Mehods
export function addURl(name: string, url: string): void {
  CadidateURL.set(name, url)
  logging.log('Added URL for' + name)
}

export function addPair(promt: string, name1: string, name2: string): void {
  CandidatePair.set(promt, [name1, name2])
}

export function addToPromtArray(promt: string) {
  if (PromtArray.contains('All arrays')) {
    const promtArr = PromtArray.getSome('All arrays')
    promtArr.push(promt)
  } else {
    PromtArray.set('All arrays', [promt])
  }
}

export function addVote(promt: string, index: i32): void {
  if (VoteArray.contains(promt)) {
    const voteArray = VoteArray.getSome(promt)
    const newVal = voteArray[index] + 1
    voteArray[index] = newVal
    VoteArray.set(promt, voteArray)
  } else {
    const newArray = [0, 0]
    newArray[index] = 1
    VoteArray.set(promt, newArray)
  }
}

export function recordUser(promt: string, user: string): void {
  if (userParticipation.contains(promt)) {
    const userArray = userParticipation.getSome(promt)
    userArray.push(user)
    userParticipation.set(promt, userArray)
  } else {
    const newArray = [user]
    userParticipation.set(promt, newArray)
  }
}
