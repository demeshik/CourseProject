using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CourseProject.Repo.Migrations
{
    public partial class Photoswereadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patient_History_HistoryId",
                table: "Patient");

            migrationBuilder.DropIndex(
                name: "IX_Patient_HistoryId",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "HistoryId",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "MedicalPhotos",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "PatientRef",
                table: "History");

            migrationBuilder.AddColumn<int>(
                name: "PatientId",
                table: "History",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MedicalCapture",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PatientId = table.Column<int>(nullable: true),
                    Time = table.Column<DateTime>(nullable: false),
                    Type = table.Column<string>(nullable: false),
                    Url = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalCapture", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalCapture_Patient_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_History_PatientId",
                table: "History",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalCapture_PatientId",
                table: "MedicalCapture",
                column: "PatientId");

            migrationBuilder.AddForeignKey(
                name: "FK_History_Patient_PatientId",
                table: "History",
                column: "PatientId",
                principalTable: "Patient",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_History_Patient_PatientId",
                table: "History");

            migrationBuilder.DropTable(
                name: "MedicalCapture");

            migrationBuilder.DropIndex(
                name: "IX_History_PatientId",
                table: "History");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "History");

            migrationBuilder.AddColumn<int>(
                name: "HistoryId",
                table: "Patient",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MedicalPhotos",
                table: "Patient",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "PatientRef",
                table: "History",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Patient_HistoryId",
                table: "Patient",
                column: "HistoryId",
                unique: true,
                filter: "[HistoryId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Patient_History_HistoryId",
                table: "Patient",
                column: "HistoryId",
                principalTable: "History",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
