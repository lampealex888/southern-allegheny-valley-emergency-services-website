import React from "react";
import Title from "@/components/title";
import Container from "@/components/container";
import Sidebar from "@/components/info-sidebar";

interface Member {
  name: string;
  position: string;
  category: string;
}

const members: Member[] = [
  { name: "John Smith", position: "Manager", category: "Officers" },
  { name: "John Smith", position: "Manager", category: "Officers" },
  { name: "John Smith", position: "Manager", category: "Officers" },
  { name: "John Smith", position: "Manager", category: "Officers" },
  { name: "John Smith", position: "Manager", category: "Officers" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
  { name: "Alice Williams", position: "Firefighter", category: "Firefighters" },
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
    <div className="bg-primary text-primary-content">
      <Title>Members</Title>
      <Container>
        <Sidebar>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center">
              {Object.entries(groupedMembers).map(
                ([category, categoryMembers]) => (
                  <div key={category}>
                    <h2 className="text-2xl mb-3 font-bold">{category}</h2>
                    <div className="flex flex-wrap justify-center">
                      {categoryMembers.map((member, index) => (
                        <div
                          className="bg-neutral text-secondary-content rounded-lg p-4 m-4 text-center w-64"
                          key={index}
                        >
                          <p className="mb-2 font-bold text-2xl">
                            {member.name}
                          </p>
                          <p className="text-neutral-content">
                            {member.position}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </Sidebar>
      </Container>
    </div>
  );
};

export default Members;
