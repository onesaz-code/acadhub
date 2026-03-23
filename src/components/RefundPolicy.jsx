import { Typography, Card, CardContent } from "@onesaz/ui";

const RefundPolicy = () => (
  <>
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12">
      <Card className="max-w-lg w-full mx-4 shadow-lg">
        <CardContent className="p-8">
          <Typography variant="h3" className="font-bold text-center mb-6">
            Refund Policy
          </Typography>
          <Typography variant="body1" className="text-gray-600 text-center leading-relaxed">
            All payments made to ACADHUB are final and non-refundable.
            <br />
            <br />
            Please review your order carefully before completing your purchase. If you
            have any questions or concerns, contact our support team prior to making
            payment.
          </Typography>
        </CardContent>
      </Card>
    </div>
  </>
);

export default RefundPolicy;
