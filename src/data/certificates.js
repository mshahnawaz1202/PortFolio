import claude101 from '../assets/certificates/claude_101.png'
import claudeCode101 from '../assets/certificates/claude_code_101.png'
import javaCert from '../assets/certificates/Java.png'
import pythonCert from '../assets/certificates/python.png'
import ciscoPacket from '../assets/certificates/cisco_packet.png'

const certificates = [
  {
    id: 1,
    title: 'Claude 101',
    issuer: 'Anthropic',
    credential: 'Skilljar',
    date: '2026',
    image: claude101,
    skills: [
      'Claude AI',
      'Prompt Engineering',
      'Generative AI',
      'AI Fundamentals',
    ],
    verify: 'https://verify.skilljar.com/c/mgb5qbgxrq7i',
    color: '#D97706',
  },
  {
    id: 2,
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    credential: 'Skilljar',
    date: '2026',
    image: claudeCode101,
    skills: [
      'Claude Code',
      'AI-Assisted Development',
      'Developer Tools',
      'Software Engineering',
    ],
    verify: 'https://verify.skilljar.com/c/gt5kwf6jou9s',
    color: '#7C3AED',
  },
  {
    id: 3,
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    credential: 'HackerRank Certificate',
    date: '2026',
    image: javaCert,
    skills: [
      'Java',
      'OOP',
      'Problem Solving',
      'Programming Fundamentals',
    ],
    verify: 'https://www.hackerrank.com/certificates/16318e40c5d0',
    color: '#2563EB',
  },
  {
    id: 4,
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    credential: 'HackerRank Certificate',
    date: '2026',
    image: pythonCert,
    skills: [
      'Python',
      'Programming',
      'Problem Solving',
      'Algorithms',
    ],
    verify: 'https://www.hackerrank.com/certificates/iframe/50f491907089',
    color: '#16A34A',
  },
  {
    id: 5,
    title: 'Exploring Networking with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    credential: 'Cisco Networking Academy',
    date: '2026',
    image: ciscoPacket,
    skills: [
      'Computer Networking',
      'Cisco Packet Tracer',
      'Network Simulation',
      'Networking Fundamentals',
    ],
    verify:
      'https://www.netacad.com/certificates/?issuanceId=a62fc860-107f-4899-92a8-a58a4be63a24',
    color: '#0891B2',
  },
]

export default certificates
