import client, { Channel, Connection, ConsumeMessage } from "amqplib";

export class RabbitMQService {
    async connection() {
        const connection = await client.connect(
            "amqp://guest:guest@localhost:5672"
        );
        return connection;
    }

    async publish(payload: any): Promise<boolean> {
        const dataBuffer = Buffer.from(JSON.stringify(payload));
        const connection = await this.connection();
        const channel: Channel = await connection.createChannel();
        await channel.assertQueue("folhapagamento");

        return channel.sendToQueue("folhapagamento", dataBuffer);
    }

    async consume(): Promise<void> {
        console.log("============== START CONSUMER ================")
        const connection = await this.connection();
        const channel: Channel = await connection.createChannel();
        await channel.assertQueue('calculatedFees');

        const consumer = (channel: Channel) => async (message: ConsumeMessage | null): Promise<void> => {
            if (message) {
              console.log(message.content.toString())
              const data = JSON.parse(message.content.toString());
              console.log(data);
              channel.ack(message);
            }
        }

        await channel.consume('calculatedFees', consumer(channel));
    }
}
