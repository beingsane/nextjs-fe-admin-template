type UserGeneralModel = {
    id: number;
    firstName?: string;
    surname?: string;
    email: string;
    emailConfirmed: boolean;
    company: boolean;
    companyId?: string;
    vatId?: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export default UserGeneralModel;