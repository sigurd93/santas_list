
const EventPacket = {
    packet_type: "event",
    _id: "autoid",
    data: {
        OrgNr: "80085",
        StudentOrg: "Beta",
        Date: "10/3/2022",
        Contact: {
            name: "Bølle Bøllesen"
        },
        Mark: [
            {
            Severity: "5",
            Comment: "Did heftig Bølling"
        },
        {
            Severity: "3",
            Comment: "Did not pay on time"
        }
    ],
        Rating: 5,
        Comment: "Very nice",
        Type: "Bedpress"

    }
}

const Company = {
    packet_type: "company",
    _id: "autoid",
    data: {
        Name: "Bølle Consultants",
        OrgNr: "80085",
        

    }
}