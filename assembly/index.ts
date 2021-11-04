import { logging, PersistentMap } from 'near-sdk-as'

const CadidateImgURL = new PersistentMap<string, string>('candidateImgURL')
const CandidatePair = new PersistentMap<string, string[]>('Candidate Pair')
const ProposalArray = new PersistentMap<string, string[]>('Proposal Array')
const VoteArray = new PersistentMap<string, i32[]>('Vote Array')
const userParticipation = new PersistentMap<string, string[]>('User Participation record')

// View methods

export function getCandidateImgURL(name: string): string {
  if (CadidateImgURL.contains(name)) {
    return CadidateImgURL.getSome(name)
  } else {
    logging.log('Cannot find that user' + name)
    return ''
  }
}

export function didParticipate(proposal: string, user: string): bool {
  if (userParticipation.contains(proposal)) {
    const userArray = userParticipation.getSome(proposal)
    return userArray.includes(user)
  }
  logging.log('proposal not found')
  return false
}

export function getAllProposal(): string[] {
  if (userParticipation.contains('All arrays')) {
    return ProposalArray.getSome('All arrays')
  }
  logging.log('no proposals not found')
  return []
}

export function getVotes(proposal: string): i32[] {
  if (VoteArray.contains(proposal)) {
    return VoteArray.getSome(proposal)
  }
  logging.log('no votes not found for this proposal')
  return [0, 0]
}

// Change Mehods
export function addImgURL(name: string, ImgURL: string): void {
  CadidateImgURL.set(name, ImgURL)
  logging.log('Added ImgURL for' + name)
}

export function addPair(proposal: string, name1: string, name2: string): void {
  CandidatePair.set(proposal, [name1, name2])
}

export function addToProposalArray(proposal: string): void {
  if (ProposalArray.contains('All arrays')) {
    const proposalArr = ProposalArray.getSome('All arrays')
    proposalArr.push(proposal)
  } else {
    ProposalArray.set('All arrays', [proposal])
  }
}

export function addVote(proposal: string, index: i32): void {
  if (VoteArray.contains(proposal)) {
    const voteArray = VoteArray.getSome(proposal)
    const newVal = voteArray[index] + 1
    voteArray[index] = newVal
    VoteArray.set(proposal, voteArray)
  } else {
    const newArray = [0, 0]
    newArray[index] = 1
    VoteArray.set(proposal, newArray)
  }
}

export function recordUser(proposal: string, user: string): void {
  if (userParticipation.contains(proposal)) {
    const userArray = userParticipation.getSome(proposal)
    userArray.push(user)
    userParticipation.set(proposal, userArray)
  } else {
    const newArray = [user]
    userParticipation.set(proposal, newArray)
  }
}
