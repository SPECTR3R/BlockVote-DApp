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
  if (VotersStorage.contains('votes')) {
    const votersArr = VotersStorage.getSome('votes')
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
  if (VotersStorage.contains('votes')) {
    const votersArr = VotersStorage.getSome('votes')
    if (votersArr.includes(user)) {
      votersArr.push(user)
      logging.log('User ' + user + 'added to VotersStorage')
    } else {
      logging.log('User ' + user + 'already Voted')
    }
  } else {
    logging.log('User ' + user + 'added to VotersStorage')
    VotersStorage.set('votes', [user])
  }
}

// import { storage, logging } from 'near-sdk-as'

// // --- contract code goes below

// export function incrementCounter(value: i32): void {
//   const newCounter = storage.getPrimitive<i32>('counter', 0) + value
//   storage.set<i32>('counter', newCounter)
//   logging.log('Counter is now: ' + newCounter.toString())
// }

// export function incrementVotes(value: i32): void {
//   const newVotos = storage.getPrimitive<i32>('votos', 0) + 1
//   const newcandidatopb = storage.getPrimitive<i32>('candidatopb', 0) + 1
//   const newcandidatopr = storage.getPrimitive<i32>('candidatopr', 0) + 1
//   const newcandidatopa = storage.getPrimitive<i32>('candidatopa', 0) + 1
//   const newcandidatopv = storage.getPrimitive<i32>('candidatopv', 0) + 1
//   switch (value) {
//     case 1:
//       storage.set<i32>('candidatopb', newcandidatopb)
//       logging.log('Candidatopb is now: ' + newcandidatopb.toString())
//       break
//     case 2:
//       storage.set<i32>('candidatopr', newcandidatopr)
//       logging.log('Candidatopr is now: ' + newcandidatopr.toString())
//       break
//     case 3:
//       storage.set<i32>('candidatopa', newcandidatopa)
//       logging.log('Candidatopa is now: ' + newcandidatopa.toString())
//       break
//     case 4:
//       storage.set<i32>('candidatopv', newcandidatopv)
//       logging.log('Candidatopb is now: ' + newcandidatopb.toString())
//       break
//     default:
//       logging.log('No es un candidato registrado')
//       break
//   }
//   storage.set<i32>('votos', newVotos)
//   logging.log('El numero de Votos emitido es: ' + newVotos.toString())
// }

// export function decrementCounter(value: i32): void {
//   const newCounter = storage.getPrimitive<i32>('counter', 0) - value
//   storage.set<i32>('counter', newCounter)
//   logging.log('Counter is now: ' + newCounter.toString())
// }

// export function getCounter(): i32 {
//   return storage.getPrimitive<i32>('counter', 0)
// }

// export function getVotes(): i32 {
//   return storage.getPrimitive<i32>('votos', 0)
// }

// export function getVotescpb(): i32 {
//   return storage.getPrimitive<i32>('candidatopb', 0)
// }

// export function getVotescpr(): i32 {
//   return storage.getPrimitive<i32>('candidatopr', 0)
// }

// export function getVotescpa(): i32 {
//   return storage.getPrimitive<i32>('candidatopa', 0)
// }

// export function getVotespv(): i32 {
//   return storage.getPrimitive<i32>('candidatopv', 0)
// }

// export function resetCounter(): void {
//   storage.set<i32>('counter', 0)
//   logging.log('Counter is reset!')
// }

// export function resetVotes(): void {
//   storage.set<i32>('candidatopb', 0)
//   storage.set<i32>('candidatopr', 0)
//   storage.set<i32>('candidatopa', 0)
//   storage.set<i32>('candidatopv', 0)
//   storage.set<i32>('votos', 0)
//   logging.log('La cuenta de votos es reinicializada!')
// }
