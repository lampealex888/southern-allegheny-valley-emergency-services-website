import React from 'react';
import PageTitle from '@/components/pageTitle';
import PageContainer from '@/components/container';
import Sidebar from '@/components/sidebar';

interface Member {
  name: string;
  position: string;
  category: string;
}

const members: Member[] = [
  { name: 'John Smith', position: 'Manager', category: 'Officers' },
  { name: 'John Smith', position: 'Manager', category: 'Officers' },
  { name: 'John Smith', position: 'Manager', category: 'Officers' },
  { name: 'John Smith', position: 'Manager', category: 'Officers' },
  { name: 'John Smith', position: 'Manager', category: 'Officers' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Firefighter', category: 'Firefighters' },
];

const Members: React.FC = () => {
  const groupedMembers = members.reduce((acc, member) => {
    if (!acc[member.category]) {
      acc[member.category] = [];
    }
    acc[member.category].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  return (
    <PageContainer>
      <PageTitle title="Members" />
      <div className="flex flex-row-reverse">
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {Object.entries(groupedMembers).map(([category, categoryMembers]) => (
            <div key={category}>
              <h2 style={{ fontSize: '24px', margin: '10px 0', fontWeight: 'bold', color: 'red' }}>{category}</h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {categoryMembers.map((member, index) => (
                  <div
                    key={index}
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        textAlign: 'center',
                        width: '250px',
                        margin: '10px',
                        fontSize: '26px',
                    }}
                  >
                    <p style={{ marginBottom: '8px', fontWeight: 'bold', fontSize: '28px', color: 'white' }}>{member.name}</p>
                    <p style={{ color: 'grey' }}>{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Members;