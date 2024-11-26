import React from 'react'

export default function AudioCall() {
    const participants = [
        { id: 1, name: 'You' },
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Jane Smith' },
        { id: 4, name: 'Chris Lee' },
        { id: 5, name: 'Taylor Swift' },
        { id: 6, name: 'Charlie Brown' },
        { id: 7, name: 'Chris Lee' },
        { id: 8, name: 'Taylor Swift' },
        { id: 9, name: 'Charlie Brown' },
    ];

    const [selectedParticipant, setSelectedParticipant] = useState(null);

    const handleParticipantClick = (participant) => {
        if (selectedParticipant?.id === participant.id) {
            setSelectedParticipant(null);
        } else {
            setSelectedParticipant(participant);
        }
    };

    return (
        <div className="fixed inset-0 md:relative w-full h-full bg-primary text-white flex flex-col rounded-lg border border-muted transition-all duration-300 z-50">
            <div className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-t-lg">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <div>
                        <h2 className="text-lg font-semibold">Name Surname</h2>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <FaUserPlus className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:text-accent transition duration-200" />
                    <FaEllipsisV className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:text-accent transition duration-200" />
                </div>
            </div>

            <div className="flex-1 m-2 overflow-y-auto bg-primary">
                {selectedParticipant && (
                    <div
                        key={selectedParticipant.id}
                        onClick={() => handleParticipantClick(selectedParticipant)}
                        className="bg-gray-600 rounded-lg cursor-pointer h-[60vh] md:h-[70vh] flex items-center justify-center relative"
                    >
                        <div className="w-full h-full bg-gray-400 rounded-lg flex items-center justify-center">
                            <span className="text-white text-4xl">{selectedParticipant.name[0]}</span>
                        </div>
                        <p className="absolute bottom-2 text-xl text-white text-center w-full">
                            {selectedParticipant.name}
                        </p>
                    </div>
                )}

                <div className="grid m-2 grid-cols-2 md:grid-cols-2 gap-2">
                    {participants
                        .filter((participant) => participant.id !== selectedParticipant?.id)
                        .map((participant) => (
                            <div
                                key={participant.id}
                                onClick={() => handleParticipantClick(participant)}
                                className="bg-gray-600 rounded-lg aspect-square cursor-pointer flex items-center justify-center relative"
                            >
                                <div className="w-full h-full bg-gray-400 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">{participant.name[0]}</span>
                                </div>
                                <p className="absolute bottom-2 text-sm text-white text-center w-full">
                                    {participant.name}
                                </p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="flex items-center justify-center w-full px-4 py-3 bg-gray-800 rounded-b-lg">
                <div className="flex space-x-8">
                    <FaVideo className="w-8 h-8 cursor-pointer hover:text-accent transition duration-200" />
                    <FaMicrophone className="w-8 h-8 cursor-pointer hover:text-accent transition duration-200" />
                    <FaCircle className="w-8 h-8 cursor-pointer text-red-600 hover:text-red-500 transition duration-200" />
                </div>
            </div>
        </div>
    );
}
