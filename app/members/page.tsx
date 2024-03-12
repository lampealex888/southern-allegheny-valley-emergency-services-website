import React from 'react';
import PageTitle from '@/components/pageTitle';
import PageContainer from '@/components/pageContainer';
import Sidebar from '@/components/sidebar';

interface Member {
  name: string;
  position: string;
  category: string;
}

const members: Member[] = [
  { name: 'John Doe', position: 'Manager', category: 'Officers' },
  { name: 'Jane Smith', position: 'Engineer', category: 'Officers' },
  { name: 'Bob Johnson', position: 'Firefighter', category: 'Firefighters' },
  { name: 'Alice Williams', position: 'Paramedic', category: 'Firefighters' },
  // Add more members as needed
];

const Members: React.FC = () => {
  // Group members by category for rendering
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
              <h2>{category}</h2>
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
                    <p>{member.name}</p>
                    <p>{member.position}</p>
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